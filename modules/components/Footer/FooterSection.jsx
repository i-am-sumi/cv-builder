"use client";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Layout, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  FooterBottom,
  FooterLinks,
  InputItem,
} from "./FooterSection.stc";

const { Footer } = Layout;
const { Title, Text } = Typography;

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <Footer style={{ background: "rgba(206, 217, 224, 0.3)", color: "gray" }}>
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col span={24} xs={24} sm={16} md={10} lg={8}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Image src="/assect/logo.png" alt="" width={160} height={90} />
            <div>
              <Title level={4} style={{ color: "grey" }}>
                CareerMela
              </Title>
              <Text style={{ fontSize: "14px", color: "grey" }}>
                Job posting & search platform — CV friendly, recruiter focused.
              </Text>
            </div>
          </div>

          <Text style={{ fontSize: "14px", color: "grey" }}>
            Build your profile, apply to jobs, and discover opportunities.
          </Text>

          <div style={{ display: "flex", alignItems: "center", color: "grey" }}>
            <Link href="#" style={{ padding: "5px", color: "blue" }}>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link href="#" style={{ padding: "5px", color: "blue" }}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="#" style={{ padding: "5px", color: "blue" }}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#" style={{ padding: "5px", color: "blue" }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </Col>
        <Col span={24} xs={24} sm={16} md={10} lg={4}>
          <Title level={4} style={{ color: "gray", marginBottom: "5px" }}>
            Product
          </Title>
          <ul style={{ text: "14px", color: "gray" }}>
            <li>
              <a href="#" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </Col>

        <Col span={24} xs={24} sm={16} md={10} lg={4}>
          <Title level={4} style={{ color: "gray", marginBottom: "5px" }}>
            Resources
          </Title>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </Col>
        <Col span={24} xs={24} sm={16} md={10} lg={4}>
          <Title level={4} style={{ color: "gray", marginBottom: "5px" }}>
            Stay updated
          </Title>
          <form style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <div className="flex-1">
              <InputItem
                id="footer-email"
                type="email"
                placeholder="@gmail.com"
              />
            </div>
            <Button type="submit">
              <FontAwesomeIcon icon={faEnvelope} />
              <Text style={{ fontSize: "14px" }}>Subscribe</Text>
            </Button>
          </form>
          <Text style={{ color: "grey", marginTop: "5px", fontSize: "12px" }}>
            We only send important updates. Unsubscribe anytime.
          </Text>
        </Col>
      </Row>

      <div style={{ borderTop: "1px solid gray", color: "gray" }}>
        <FooterBottom>
          <Text>© {year} CareerMela. All rights reserved.</Text>
          <FooterLinks>
            <Link href="#" className="hover:text-white">
              Contact
            </Link>
            <Link href="#" className="hover:text-white">
              Status
            </Link>
            <Link href="#" className="hover:text-white">
              Sitemap
            </Link>
          </FooterLinks>
        </FooterBottom>
      </div>
    </Footer>
  );
}
