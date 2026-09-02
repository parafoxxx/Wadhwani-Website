/**
 * Single source of truth for the institute logo.
 *
 * Swap the artwork by replacing `public/wic-logo.png` (or repointing
 * LOGO_SRC). Nothing else needs to change.
 */
export const LOGO_SRC = "/wic-logo.png";
export const LOGO_ALT =
  "Wadhwani Innovation Network Center of Excellence (WIN CoE), IIT Kanpur — Life Sciences and MedTech";

export default function Logo({ className = "" }: { className?: string }) {
  return <img src={LOGO_SRC} alt={LOGO_ALT} className={className} />;
}
