export enum ImageStatus {
  PENDING = "PENDING",
  BUILDING = "BUILDING",
  SCANNING = "SCANNING",
  HARDENING = "HARDENING",
  SIGNING = "SIGNING",
  PUSHED = "PUSHED",
  QUARANTINED = "QUARANTINED",
  FAILED = "FAILED"
}

export enum VulnerabilitySeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  UNKNOWN = "UNKNOWN"
}

export interface ImageMetadata {
  id: string;
  name: string;
  tag: string;
  digest: string;
  architecture: string;
  os: string;
  baseImage: string;
  size: number;
  status: ImageStatus;
  createdAt: string;
}

export interface ScanResult {
  imageId: string;
  scanner: "TRIVY" | "GRYPE" | "SNYK";
  vulnerabilities: {
    id: string;
    package: string;
    version: string;
    fixedIn?: string;
    severity: VulnerabilitySeverity;
    description: string;
  }[];
  summary: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
}

export interface SBOMInfo {
  imageId: string;
  format: "SPDX" | "CYCLONEDX";
  packageCount: number;
  dependencies: string[];
}
