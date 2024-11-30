import IconAdjustment from '@/public/icons/adjustment';
import IconLogo from '@/public/icons/logo';
import Image from 'next/image';
import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "100%", // Makes it circular
          overflow: "hidden", //
        }}
      >
        <IconLogo />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}