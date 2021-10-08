var appConfig = {
  //  change the your AccountSid
  accountSid: 'AC...',
  // change to your Flex Flow SID
  flexFlowSid: 'FO...',
  // colorTheme: {
  //     overrides: brandedColors
  // }
  context: {
    fileAttachment: true
  },

  startEngagementOnInit: false,
  preEngagementConfig: {
    description: 'Please provide your information to stay connected',
    fields: [
      {
        label: 'Name?',
        type: 'InputItem',
        attributes: {
          name: 'friendlyName',
          type: 'text',
          placeholder: 'Enter your name',
          required: false,
          readOnly: false
        }
      },
      {
        label: 'Email?',
        type: 'InputItem',
        attributes: {
          name: 'email',
          type: 'email',
          placeholder: 'Enter yout email',
          required: false,
          readOnly: false
        }
      }

      // {
      //     label: "What is your question?",
      //     type: "TextareaItem",
      //     attributes: {
      //         name: "question",
      //         type: "text",
      //         placeholder: "Type your question here",
      //         required: false,
      //         rows: 5,
      //         value: "My awesome question",
      //         readOnly: false
      //     }
      // }
    ],
    footerLabel:
      '(the information provided herein will be kept private,and will not be used for any other purpose than responding the queries)',
    submitLabel: "Ok Let's Go!"
  }
}