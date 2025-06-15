//app/api/patient-health/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Interface for patient health data
interface PatientHealthData {
  aadhaar: string;
  gender: string;
  dob: string;
  bloodGroup: string;
  dietType: string;
  activityLevel: string;
  smokingAlcohol: string;
  chronicConditions: string;
  allergies: string;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory storage for patient health data
const patientHealthData: PatientHealthData[] = [];

export async function POST(request: NextRequest) {
  try {
    const { 
      aadhaar,
      gender, 
      dob, 
      bloodGroup, 
      dietType, 
      activityLevel, 
      smokingAlcohol, 
      chronicConditions, 
      allergies 
    } = await request.json();

    // Validate required fields
    if (!aadhaar) {
      return NextResponse.json(
        { error: 'Aadhaar number is required' },
        { status: 400 }
      );
    }

    // Clean the Aadhaar number
    const cleanAadhaar = aadhaar.replace(/\D/g, '');

    // Validate Aadhaar format
    if (cleanAadhaar.length !== 12) {
      return NextResponse.json(
        { error: 'Invalid Aadhaar number format' },
        { status: 400 }
      );
    }

    // Check if patient health data already exists
    const existingIndex = patientHealthData.findIndex(
      patient => patient.aadhaar === cleanAadhaar
    );

    const healthData: PatientHealthData = {
      aadhaar: cleanAadhaar,
      gender: gender || '',
      dob: dob || '',
      bloodGroup: bloodGroup || '',
      dietType: dietType || '',
      activityLevel: activityLevel || '',
      smokingAlcohol: smokingAlcohol || '',
      chronicConditions: chronicConditions || '',
      allergies: allergies || '',
      createdAt: existingIndex >= 0 ? patientHealthData[existingIndex].createdAt : new Date(),
      updatedAt: new Date()
    };

    if (existingIndex >= 0) {
      // Update existing data
      patientHealthData[existingIndex] = healthData;
      return NextResponse.json({
        success: true,
        message: 'Health profile updated successfully',
        data: healthData
      });
    } else {
      // Create new data
      patientHealthData.push(healthData);
      return NextResponse.json({
        success: true,
        message: 'Health profile created successfully',
        data: healthData
      });
    }

  } catch (error) {
    console.error('Patient health data error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const aadhaar = searchParams.get('aadhaar');

    if (!aadhaar) {
      return NextResponse.json(
        { error: 'Aadhaar number is required' },
        { status: 400 }
      );
    }

    // Clean the Aadhaar number
    const cleanAadhaar = aadhaar.replace(/\D/g, '');

    // Find patient health data
    const patientData = patientHealthData.find(
      patient => patient.aadhaar === cleanAadhaar
    );

    if (!patientData) {
      return NextResponse.json(
        { error: 'Patient health data not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: patientData
    });

  } catch (error) {
    console.error('Get patient health data error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT method for updating patient health data
export async function PUT(request: NextRequest) {
  try {
    const updateData = await request.json();
    const { aadhaar } = updateData;

    if (!aadhaar) {
      return NextResponse.json(
        { error: 'Aadhaar number is required' },
        { status: 400 }
      );
    }

    // Clean the Aadhaar number
    const cleanAadhaar = aadhaar.replace(/\D/g, '');

    // Find existing patient data
    const existingIndex = patientHealthData.findIndex(
      patient => patient.aadhaar === cleanAadhaar
    );

    if (existingIndex < 0) {
      return NextResponse.json(
        { error: 'Patient health data not found' },
        { status: 404 }
      );
    }

    // Update only provided fields
    const existingData = patientHealthData[existingIndex];
    const updatedData: PatientHealthData = {
      ...existingData,
      ...updateData,
      aadhaar: cleanAadhaar, // Ensure Aadhaar doesn't change
      updatedAt: new Date()
    };

    patientHealthData[existingIndex] = updatedData;

    return NextResponse.json({
      success: true,
      message: 'Health profile updated successfully',
      data: updatedData
    });

  } catch (error) {
    console.error('Update patient health data error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}