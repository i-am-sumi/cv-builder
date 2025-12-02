"use client";
import { useLogoutUser } from "@/modules/auth/auth.query";
import { Button, Dropdown, Layout, Menu, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Navber, TagItem, User } from "./AppHeader.stc";
const { Header } = Layout;
const { Title, Text } = Typography;

export default function AppHeader() {
  const pathname = usePathname();
  const currentRouteKey = pathname?.split("/")?.[1] || "home";
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem("userData");
      const token = localStorage.getItem("token");

      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    updateUser();

    window.addEventListener("user-updated", updateUser);

    return () => {
      window.removeEventListener("user-updated", updateUser);
    };
  }, []);

  const logout = useLogoutUser(() => {
    setUser(null);
  });

  const items1 = [
    {
      key: "home",
      label: <Link href="/">Home</Link>,
    },
    { key: "dashboard", label: <Link href="/dashboard">Dashboard</Link> },
    {
      key: "jobs",
      label: <Link href="/jobs">Jobs</Link>,
    },
    { key: "cv", label: <Link href="/cv-builder">CV Builder</Link> },
    { key: "education", label: <Link href="/education">Education</Link> },
    { key: "skills", label: <Link href="/skills">Skills</Link> },
    { key: "experiences", label: <Link href="/experiences">Experiences</Link> },
    { key: "profile", label: <Link href="/profile">Profile</Link> },
  ];

  const userMenu = {
    items: [
      { key: "profile", label: <Link href="/profile">Profile</Link> },
      {
        key: "logout",
        label: <button onClick={() => logout.mutate()}>Logout</button>,
      },
    ],
  };

  const getInitials = (firstName, lastName) => {
    if (!firstName && !lastName) return "";
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
  };

  return (
    <Navber>
      <div>
        <Image
          src="/assect/logo.png"
          alt="Logo"
          width={95}
          height={75}
          style={{ width: "100px", height: "auto" }}
          priority
        />
      </div>

      <Menu
        selectedKeys={[currentRouteKey]}
        mode="horizontal"
        items={items1}
        className="menu-item"
        style={{ flex: 1, minWidth: 0 }}
        theme={"light"}
      />

      <div>
        {user ? (
          <div className="thing">
            <TagItem>
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </TagItem>
            <Dropdown menu={userMenu} placement="bottomRight">
              <User>{getInitials(user.firstName, user.lastName)}</User>
            </Dropdown>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "5px" }}>
            <Link href={"/auth/login"}>
              <Button
                type="primary"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Login
              </Button>
            </Link>
            <Link href={"/auth/register"}>
              <Button style={{ fontSize: "15px", fontWeight: "bold" }}>
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Navber>
  );
}
