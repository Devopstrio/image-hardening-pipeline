# Architecture & Build Diagrams

## 11. Secure Multi-Stage Build Flow (Detailed)
*How the build engine enforces isolation and minimal footprints.*

```mermaid
graph TD
    Source[Git Source] --> Stage1[Stage 1: Compile - Heavyweight OS]
    Stage1 --> Artifact[Binary Artifact]
    Artifact --> Stage2[Stage 2: Final - Distroless/Minimal]
    Stage2 --> Scan[Security Scan]
    Scan --> Final[Hardened Image]
```

## 13. Image Promotion & Quarantine Flow
```mermaid
graph LR
    Build[Build] --> Dev[Dev Registry]
    Dev --> Scan{Security Gate}
    Scan -- Fail --> Quarantine[Quarantine Registry]
    Scan -- Pass --> Prod[Prod Registry]
```

## 20. SLSA Compliance Model
```mermaid
stateDiagram-v2
    Source --> Build: Trusted Source
    Build --> Provenance: Signed Attestation
    Provenance --> Distribution: Verified Artifact
```
