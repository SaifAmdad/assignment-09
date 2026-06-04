"use client";

import Image from "next/image";

export default function AvatarClient({ url, height, width }) {
  if (typeof url == "string" && url.startsWith("http")) {
    return (
      <Image
        src={url}
        alt="avatar"
        width={width}
        height={height}
        className="h-9 w-9 border border-indigo-600 rounded-full ml-4"
      />
    );
  } else {
    return (
      <Image
        src={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"}
        alt="Photo"
        srcSet=""
        height={height}
        width={width}
        className="h-9 w-9  border border-indigo-600 rounded-full p-1 ml-4"
      />
    );
  }
}
