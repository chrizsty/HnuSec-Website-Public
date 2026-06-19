/**
 * Shared page background: base gradient + optional subtle grid overlay.
 *
 * Extracted from the verbatim ~6-line block that was copy-pasted across the
 * archives pages (list + 3 subpages) and the recruitment page. Each page used
 * an identical base64 SVG grid at `opacity-30`; this module hoists that string
 * into one constant so it lives in exactly one place.
 *
 * The gradient uses semantic tokens (`from-background to-muted`) so it flips
 * correctly in dark mode.
 */

const GRID_SVG_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiM2YjZiZmYwNSIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNMzAgMGgzMHYzMEgzNHpNMCAwaDMwdjMwSDB6IiBmaWxsPSIjNmI2YmZmMDUiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg=="

export function SiteBackground({
  showGrid = true,
  className,
}: {
  showGrid?: boolean
  className?: string
}) {
  return (
    <div className={`fixed inset-0 z-0 overflow-hidden ${className ?? ""}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted" />
      {showGrid && (
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url('${GRID_SVG_DATA_URL}')` }}
        />
      )}
    </div>
  )
}
