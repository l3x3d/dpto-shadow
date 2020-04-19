import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,	
  Stack,
  TextField,
  TextStyle,	
} from '@shopify/polaris';

class AnnotatedLayout extends React.Component {
  state = {
    discount: 'ex. GET [sales_history] [customer_information] [inventory_levels]',
	enabled: false,  
  };

  render() {
	const { discount, enabled } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled'; 

    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Request Data"
            description="Submit an Api call to request data and receive json formatted response."
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="using REST regex commands"
                    type="REST API Call"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Settings Panel"
            description="Toggle Request settings"
          >
            <SettingToggle
              action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}
              enabled={enabled}
            >
              This setting is{' '}
              <TextStyle variation="strong">{textStatus}</TextStyle>.
            </SettingToggle>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log('submission', this.state);
  };

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };
  handleToggle = () => {
    this.setState(({ enabled }) => {
      return { enabled: !enabled };
    });
  };
}

export default AnnotatedLayout;