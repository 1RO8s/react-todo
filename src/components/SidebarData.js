import React from "react";
import {
  Home as HomeIcon,
  Mail as MailIcon,
  Analytics as AnalyticsIcon,
  PersonAdd as PersonAddIcon,
  Payment as PaymentIcon,
  Upload as UploadIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

export const SidebarData = [
  {
    title:"ホーム",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title:"メール",
    icon: <MailIcon />,
    link: "/mail"
  },
  {
    title:"アナリティクス",
    icon: <AnalyticsIcon />,
    link: "/analytics"
  },
  {
    title:"友達追加",
    icon: <PersonAddIcon />,
    link: "/add-frend"
  },
  {
    title:"お支払い設定",
    icon: <PaymentIcon />,
    link: "/payment"
  },
  {
    title:"アップロード",
    icon: <UploadIcon />,
    link: "/upload"
  },
  {
    title:"詳細設定",
    icon: <SettingsIcon />,
    link: "/setting"
  },
];