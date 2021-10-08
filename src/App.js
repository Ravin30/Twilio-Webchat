import React from 'react'
import * as FlexWebChat from '@twilio/flex-webchat-ui'
import PendingCanvas from './components/PendingCanvas'


class App extends React.Component {
  state = {}

  constructor(props) {
    super(props)
    const { configuration } = props

    FlexWebChat.Manager.create(configuration)
      .then(manager => {
        FlexWebChat.PendingEngagementCanvas.Content.remove('container');
        FlexWebChat.PendingEngagementCanvas.Content.add(<PendingCanvas key="pending canvas"/>);


        FlexWebChat.MainHeader.Content.remove('close-button');
        this.setState({ manager });
      }).catch(error => this.setState({ error }))
  }

  render() {
    const { manager, error } = this.state

    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      )
    }

    if (error) {
      console.error('Failed to initialize Flex Web Chat', error)
    }

    return null
  }
}

FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = false;
export default App
