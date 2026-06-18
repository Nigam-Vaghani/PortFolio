import { NextResponse } from "next/server";

export const revalidate = 60; // Cache for 1 minute

export async function GET() {
  try {
    const response = await fetch('https://github.com/users/Nigam-Vaghani/contributions', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    const match = html.match(/<h2[^>]*>\s*([\d,]+)\s+contributions/i);
    
    if (match && match[1]) {
      return NextResponse.json({ contributions: match[1] });
    }
    
    return NextResponse.json({ contributions: "0" });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json({ contributions: "..." }, { status: 500 });
  }
}
