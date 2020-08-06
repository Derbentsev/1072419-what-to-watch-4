import withActiveTab from './with-active-tab';
import {films} from '@utils/test-data';


interface MockComponentProps {
  children: React.ReactNode;
}

const MockComponent = (props: MockComponentProps) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockWrappedComponent = withActiveTab(MockComponent);

it(`Render Movie Page`, () => {
  const tree = renderer
    .create(
      <MockWrappedComponent
        film = {films[0]}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
