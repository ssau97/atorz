import {
  AtorzSymbol,
  ShorticleIcon,
  PlayStoreIcon,
  AppleIcon,
  YoutubeIcon,
  SteamIcon,
  UnityIcon,
  UnrealIcon,
  AtorzAmbigram,
  InstagramIcon,
} from "@/components/ui/Icons"; // Icons 파일 경로에 맞춰 수정하세요

export const introSliderData = [
  {
    id: 1,
    category: "STUDIO PROFILE",
    title: "atorz studio",
    description: "WE ARE CRE_atorz.",
    image: "/images/about/profile.webp",
    links: [
      {
        id: "s1",
        icon: <ShorticleIcon />,
        href: "https://shorticle.com",
        tooltip: "Shorticle",
      },
      {
        id: "s2",
        icon: <PlayStoreIcon />,
        href: "https://play.google.com/store/apps/dev?id=5233406322989418544",
        tooltip: "Google Play",
      },
      {
        id: "s3",
        icon: <AppleIcon />,
        href: "https://apps.apple.com/app/id1548769444",
        tooltip: "App Store",
      },
      {
        id: "s4",
        icon: <YoutubeIcon />,
        href: "https://www.youtube.com/@atorzstudio",
        tooltip: "YouTube",
      },
    ],
  },
];
