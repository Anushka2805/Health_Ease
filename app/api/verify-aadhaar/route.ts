//app/api/verify-adhaar/route.ts
import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
const verifiedAadhaarNumbers = new Set<string>();

// Dummy valid Aadhaar numbers for testing (in real app, this would be a database call)
const validAadhaarNumbers = [
  '123456789012',
  '234567890123',
  '345678901234',
  '456789012345',
  '567890123456'
];

export async function POST(request: NextRequest) {
  try {
    const { aadhaar } = await request.json();

    // Validate input
    if (!aadhaar) {
      return NextResponse.json(
        { error: 'Aadhaar number is required' },
        { status: 400 }
      );
    }

    // Clean the Aadhaar number (remove spaces and any non-digit characters)
    const cleanAadhaar = aadhaar.replace(/\D/g, '');

    // Check if Aadhaar is 12 digits
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

    // Simulate API delay (like real Aadhaar verification)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if Aadhaar is valid (in real app, this would be UIDAI API call)
    const isValid = validAadhaarNumbers.includes(cleanAadhaar) || 
                   cleanAadhaar.startsWith('1234'); // Accept any number starting with 1234 for demo

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid Aadhaar number. Please check and try again.' },
        { status: 400 }
      );
    }

    // Check if already verified
    if (verifiedAadhaarNumbers.has(cleanAadhaar)) {
      return NextResponse.json(
        { error: 'This Aadhaar number has already been verified' },
        { status: 400 }
      );
    }

    // Mark as verified
    verifiedAadhaarNumbers.add(cleanAadhaar);

    return NextResponse.json({
      success: true,
      message: 'Aadhaar verified successfully',
      aadhaar: cleanAadhaar
    });

  } catch (error) {
    console.error('Aadhaar verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
