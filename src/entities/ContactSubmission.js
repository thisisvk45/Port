export const ContactSubmissionSchema = {
  name: "ContactSubmission",
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Name of the person contacting",
    },
    email: {
      type: "string",
      format: "email",
      description: "Email address",
    },
    message: {
      type: "string",
      description: "Message content",
    },
    status: {
      type: "string",
      enum: ["new", "replied", "archived"],
      default: "new",
      description: "Status of the submission",
    },
  },
  required: ["name", "email", "message"],
};
