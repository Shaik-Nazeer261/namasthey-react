const head1=React.createElement(
    "h1",
    {
    id:"head1",
    key:"head1",
    },
    "head1");
const head2=React.createElement(
    "h2",
    {
    id:"head2",
    key:"head2",
    },
    "head2");
const container=React.createElement(
    "div",
    {
        id:"container",
        helo:"hello"
    },
    [head1,head2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
