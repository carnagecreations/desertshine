// Real spam trap for the lead forms.
//
// All three forms already POST a `_gotcha` key to the Case Files worker, but
// the value was hard-coded to '' and no input was ever rendered — so the trap
// caught nothing and bot submissions arrived in the app as ordinary leads.
// This renders the field the payload always promised. The wire format is
// unchanged: same endpoint, same key, same type.
//
// Positioned off-screen rather than display:none — headless bots skip hidden
// inputs but happily fill a visible-to-the-DOM one. Hidden from assistive tech
// and removed from the tab order so no human ever reaches it.
export default function HoneypotField({
  value,
  onChange,
  id = 'company-website',
}: {
  value: string;
  onChange: (v: string) => void;
  id?: string;
}) {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor={id}>Do not fill this in</label>
      <input
        id={id}
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
