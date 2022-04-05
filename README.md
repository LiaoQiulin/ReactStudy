# 条件渲染

## 1 if-else return: ``ConditionRendering.js``
```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
## 2 元素变量: ``ElementVariables.js``
```jsx
if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
```
## 3 内联表达式 ``&&``操作符作为If: ``InlineIf.js``
```jsx
{unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
```
## 4 内联表达式 ``condition ? true : false``操作符作为If-Else: ``InlineIfElse.js``
```jsx
render() {
            const isLoggedIn = this.state.isLoggedIn;
            return (
                <div>
                    <Greeting isLoggedIn={isLoggedIn}/>
                    {isLoggedIn
                        ? <LogoutButton onClick={this.handleLogoutClick} />
                        : <LoginButton onClick={this.handleLoginClick} />
                    }
                </div>
            );
        }
```
## 5 不渲染: ``PreventingRendering.js``
```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```
