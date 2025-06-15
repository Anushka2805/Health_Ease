import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const aadhaar = searchParams.get('aadhaar');

    if (!aadhaar) {
      return NextResponse.json({ error: 'Aadhaar number is required' }, { status: 400 });
    }

    // Replace this with your actual database query
    // Example structure - adapt to your database
    const patientData = {
      fullName: "Shaivi Sharma", // You'll need to get this from your user registration table
      dob: "1995-08-15",
      gender: "Female",
      bloodGroup: "A+",
      dietType: "Vegetarian",
      activityLevel: "Moderate",
      smokingAlcohol: "No",
      chronicConditions: "None",
      allergies: "Dust allergies",
      emergencyContactName: "Rajesh Sharma",
      emergencyContactPhone: "+91-9876543210",
      emergencyContactRelation: "Father",
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({ 
      success: true, 
      data: patientData 
    });

  } catch (error) {
    console.error('Error fetching patient data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patient data' },
      { status: 500 }
    );
  }
}