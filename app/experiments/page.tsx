const experiments = [
  "Bank seized properties",
  "Flight radar alternatives (that sold for $100M)",
  "Artlist / veed alternatives for specific segments",
  "Party planner / wedding planner for different sub cultures",
  "Airbnb for Buses - curated bus traveling experience",
  "Screen less experience Curated content for kids (Yoto) - maybe for adults",
  "Kannada learning app for new to Karnataka folks",
  "Highway assistant - travel app for users on the road in a car : safety, pit stops, emergency, late night stays, great food",
  "Netflix for AI films",
  "Micro drama category - for my love of films.",
  "End the heart endemic - build a health product that users open on a daily basis to learn their progress against bad health outcomes - inspired by whoop, huberman, inside tracker, sugarfit",
  "Your ai WhatsApp assistant (like granola) - can take voice notes, text and possibly can read stuff on WhatsApp (for B2B). Can become an assistant on gmail, slack.",
  "Help founders build founder brand. An app on desktop and mobile that has access to meetings, customer calls etc., and topics that interest the founder in a big way and that’ll help founder write, make a video and share.",
  "personal bio hacker - ai enabled, human in the loop, backed by blood work and routines.",
  "a brain interface or a heart interface not just for clinical purposes but for preventive healthcare and performance",
  "Solve the protruding belly problem, solve for heart attack, diabetes and metabolic issues. Don’t ask generic questions, get to super specific details, get the user to get to the details but start simple.",
];

export default function ExperimentsPage() {
  return (
    <main
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "24px",
      }}
    >
      <div style={{ color: "black", maxWidth: "900px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
          Experiment list
        </h1>
        <ol style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "20px" }}>
          {experiments.map((experiment) => (
            <li key={experiment}>{experiment}</li>
          ))}
        </ol>
      <div
        style={{
          fontSize: "20px",
          color: "black",
        }}
      >
        experiment list here
      </div>
    </main>
  );
}
