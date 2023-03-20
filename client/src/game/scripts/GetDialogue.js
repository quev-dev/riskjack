export default function getDialogue(dialogueType) {
  let dialogueToReturn = "";
  switch (dialogueType) {
    default:
      dialogueToReturn = "Waiting...";
      break;
    case "Hit":
      dialogueToReturn = "Hit me.";
      break;
    case "Stay":
      dialogueToReturn = "I'm gonna stay.";
      break;
  }
}
