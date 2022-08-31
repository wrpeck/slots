import { 
  ActionCardWithTagsCollection,
} from './ui-components';

function App() {
  return (
    <div>
      <ActionCardWithTagsCollection 
        overrideItems={({item, index}) => ({
          overrides: {
            "Button" : {
              onClick: () => {
                console.log(item)
              }
            },
          },
          brandArea: 
          <div>
            <small><i>AWS Amplify Brand</i></small>
          </div>,
        })}
        direction='row' />
    </div>
  );
}
export default App;
