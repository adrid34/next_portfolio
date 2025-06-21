-- =============================================================================
-- Migration: 001_create_visitors_table.sql
-- Description:
-- This script creates the `visitors` table to store detailed information
-- about users who visit the portfolio. The data captured includes IP-based
-- geolocation, network details (ASN, company), and various security flags
-- (e.g., whether the visitor is a crawler, using a VPN, etc.).
--
-- Table: visitors
--   - id: Primary key for the record.
--   - ip: The visitor's IP address.
--   - Geolocation columns (city, state, country, lat, lon, etc.): Visitor's geographical data.
--   - Network columns (org, asn, company, etc.): Information about the visitor's network provider.
--   - Security flags (is_eu_member, is_datacenter, is_mobile, etc.): Boolean flags for various classifications.
--   - created_at: Timestamp of when the record was created.
-- =============================================================================

CREATE TABLE visitors (
  id SERIAL PRIMARY KEY,
  ip INET NOT NULL,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  country_code CHAR(2),
  continent VARCHAR(50),
  zip VARCHAR(20),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  timezone VARCHAR(100),
  local_time TIMESTAMPTZ,
  is_eu_member BOOLEAN,
  is_dst BOOLEAN,
  org VARCHAR(255),
  asn INTEGER,
  asn_descr VARCHAR(255),
  asn_domain VARCHAR(255),
  asn_abuse_email VARCHAR(255),
  asn_type VARCHAR(50),
  company_name VARCHAR(255),
  company_type VARCHAR(50),
  company_domain VARCHAR(255),
  company_abuser_score VARCHAR(50),
  datacenter_name VARCHAR(255),
  datacenter_domain VARCHAR(255),
  datacenter_network VARCHAR(255),
  is_datacenter BOOLEAN,
  is_mobile BOOLEAN,
  is_satellite BOOLEAN,
  is_crawler BOOLEAN,
  is_tor BOOLEAN,
  is_proxy BOOLEAN,
  is_vpn BOOLEAN,
  is_abuser BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);