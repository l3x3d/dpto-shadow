import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://dpto-aws.s3-us-west-1.amazonaws.com/dpto-shadow-assets/shadow-empty-state.png';

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
	   <TitleBar
         primaryAction={{
           content: 'Select products',
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
	      <EmptyState
            heading="SHADOW v1.0"
             action={{
              content: 'Get Started',
           onAction: () => this.setState({ open: true }),
        }}
        image={img}
      >	
        <p>Create automations and Api interactions with dpto-la.myshopify & dpto.la [development environment]</p>
         </EmptyState>
        </Layout>
      </Page>
    );
  }
handleSelection = (resources) => {
  this.setState({ open: false })
  console.log(resources)
 };
}

export default Index;