export const navItems = [
  { name: "Dashboard", icon: "/assets/icon/dashboard.svg", url: "/" },
  { name: "Documents", icon: "/assets/icon/documents.svg", url: "/documents" },
  { name: "Images", icon: "/assets/icon/images.svg", url: "/images" },
  { name: "Media", icon: "/assets/icon/video.svg", url: "/media" },
  { name: "Others", icon: "/assets/icon/others.svg", url: "/others" },
];

export const actionsDropdownItems = [
  {
    label: "Rename",
    icon: "/assets/icon/edit.svg",
    value: "rename",
  },
  {
    label: "Details",
    icon: "/assets/icon/info.svg",
    value: "details",
  },
  {
    label: "Share",
    icon: "/assets/icon/share.svg",
    value: "share",
  },
  {
    label: "Download",
    icon: "/assets/icon/download.svg",
    value: "download",
  },
  {
    label: "Delete",
    icon: "/assets/icon/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";
