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
//
// The value is only ever REPORTED to the worker; the client never blocks on
// it. An earlier version dropped the submission when the trap was filled,
// which turns any false positive — browser autofill, a password manager —
// into a dead button that loses a real lead with no error. Deciding what a
// filled trap means belongs on the server, where a false positive can be
// seen and corrected.
//
// Naming matters: the id and label deliberately avoid anything autofill
// recognises (company, website, address, email, name). data-* hints tell the
// common password managers to leave it alone.
export default function HoneypotField({
  value,
  onChange,
  id = 'cc-hp',
}: {
  value: string;
  onChange: (v: string) => void;
  id?: string;
}) {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor={id}>Leave this field blank</label>
      <input
        id={id}
        type="text"
        name={id}
        tabIndex={-1}
        autoComplete="off"
        data-lpignore="true"
        data-1p-ignore="true"
        data-form-type="other"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
