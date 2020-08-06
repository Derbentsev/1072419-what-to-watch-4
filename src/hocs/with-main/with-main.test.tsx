import withMain from './with-main';


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

const MockWrappedComponent = withMain(MockComponent);

it(`Render Movie Page`, () => {
  const tree = renderer
    .create(
      <MockWrappedComponent
      setShowedFilmsCount = {() => {}}
      showedFilmsCount = {8}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
