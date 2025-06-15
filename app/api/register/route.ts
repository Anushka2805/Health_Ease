//app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// In-memory storage for demo purposes
interface User {
  id: string;
  aadhaar: string;
  fullName: string;
  password: string;
  userType: 'doctor' | 'patient';
  registeredAt: Date;
}

const users: User[] = [];
const registeredAadhaarNumbers = new Set<string>();

// This should match the verified Aadhaar numbers from verify-aadhaar API
const verifiedAadhaarNumbers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const { aadhaar, fullName, password, userType } = await request.json();

    // Validate input
    if (!aadhaar || !fullName || !password || !userType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Clean the Aadhaar number (remove spaces and any non-digit characters)
    const cleanAadhaar = aadhaar.replace(/\D/g, '');

    // Validate Aadhaar format
    if (cleanAadhaar.length !== 12) {
      return NextResponse.json(
        { error: 'Please enter a valid 12-digit Aadhaar number' },
        { status: 400 }
      );
    }

    // Check if all characters are numbers (simple validation)
    for (let i = 0; i < cleanAadhaar.length; i++) {
      if (cleanAadhaar[i] < '0' || cleanAadhaar[i] > '9') {
        return NextResponse.json(
          { error: 'Aadhaar number should contain only digits' },
          { status: 400 }
        );
      }
    }

    // Validate user type
    if (!['doctor', 'patient'].includes(userType)) {
      return NextResponse.json(
        { error: 'Invalid user type' },
        { status: 400 }
      );
    }

    // Validate name
    if (fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Full name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Validate password
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if Aadhaar was verified (in real app, you'd check against your verification system)
    // For demo, we'll accept any number starting with 1234 as verified
    const isVerified = cleanAadhaar.startsWith('1234') || verifiedAadhaarNumbers.has(cleanAadhaar);
    if (!isVerified) {
      return NextResponse.json(
        { error: 'Please verify your Aadhaar number first' },
        { status: 400 }
      );
    }

    // Check if Aadhaar is already registered
    if (registeredAadhaarNumbers.has(cleanAadhaar)) {
      return NextResponse.json(
        { error: 'This Aadhaar number is already registered' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user: User = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      aadhaar: cleanAadhaar,
      fullName: fullName.trim(),
      password: hashedPassword,
      userType,
      registeredAt: new Date()
    };

    // Store user
    users.push(user);
    registeredAadhaarNumbers.add(cleanAadhaar);

    // Return success response (don't include password)
    const { password: _, ...userResponse } = user;

    console.log('User registered successfully:', userResponse);

    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      user: userResponse
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve users (for debugging purposes)
export async function GET() {
  return NextResponse.json({
    users: users.map(({ password, ...user }) => user),
    totalUsers: users.length
  });
}