"use client";
import theme from "@/theme/themeConfig";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Navber, TagItem } from "./AppHeader.stc";
const { Header } = Layout;

export default function AppHeader() {
  const pathname = usePathname();
  const currentRouteKey = pathname?.split("/")?.[1] || "home";
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userData");
    setUser(null);
  };

  const items1 = [
    { key: "home", label: <Link href="/">Home</Link> },
    { key: "dashboard", label: <Link href="/dashboard">Dashboard</Link> },
    { key: "jobs", label: <Link href="/jobs">Jobs</Link> },
    { key: "cv", label: <Link href="/cv-builder">CV Builder</Link> },
    { key: "education", label: <Link href="/education">Education</Link> },
    { key: "skills", label: <Link href="/skills">Skills</Link> },
    { key: "experiences", label: <Link href="/experiences">Experiences</Link> },
    { key: "profile", label: <Link href="/profile">Profile</Link> },
  ];

  const userMenu = {
    items: [
      { key: "profile", label: <Link href="/profile">Profile</Link> },
      { key: "logout", label: <span onClick={logout}>Logout</span> },
    ],
  };

  const getInitials = (firstName, lastName) => {
    if (!firstName && !lastName) return "";
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
  };

  return (
    <Navber
      style={{
        backgroundColor: pathname === "/" ? "#1890ff" : theme.token.bodyBg1,
        color: pathname === "/" ? " white" : theme.token.ColorPicker,
      }}
    >
      <div className="flex items-center gap-2 min-w-0 mr-4">
        <Link href="/">
          <Image
            src="/assect/cv.png"
            alt=""
            width={20}
            height={20}
            style={{ fontSize: "24px", color: theme.token.colorPrimary }}
          />
        </Link>
        <span style={{ fontSize: "17px" }}>CV Builder Pro</span>
      </div>

      <Menu
        selectedKeys={[currentRouteKey]}
        mode="horizontal"
        items={items1}
        className="menu-item"
        style={{ flex: 1, minWidth: 0 }}
        theme={pathname === "/" ? "dark" : "light"}
      />

      <div className="wrapper">
        {user ? (
          <div className="thing">
            <TagItem
              style={{
                color: pathname === "/" ? "#1890ff" : "#f9fbfdff",
                backgroundColor: pathname === "/" ? "#f9fbfdff" : "#1890ff",
              }}
            >
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </TagItem>
            <Dropdown menu={userMenu} placement="bottomRight">
              <Avatar
                style={{
                  color: pathname === "/" ? "#1890ff" : "#f9fbfdff",
                  backgroundColor: pathname === "/" ? "#f9fbfdff" : "#1890ff",
                  fontWeight: "bold",
                }}
              >
                {getInitials(user.firstName, user.lastName)}
              </Avatar>
            </Dropdown>
          </div>
        ) : (
          <>
            <Link href={"/auth/login"}>
              <Button type="primary">Login</Button>
            </Link>
            <Link href={"/auth/register"}>
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </Navber>
  );
}
