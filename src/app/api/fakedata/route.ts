import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse<any>> {
  return NextResponse.json({
    status: 200,
    body: {
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@toto.com",
          address: "My adress",
        },
      ],
    },
  });
}
