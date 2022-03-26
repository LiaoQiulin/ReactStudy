# 条件渲染: ``ConditionRendering.js``


## 1 元素变量: ``ConditionRendering.js``

```jsx
if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
```

## 2 内联表达式 ``&&``操作符作为If: ``InlineIf.js``

```jsx
{unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
```

## 3 内联表达式 ``condition ? true : false``操作符作为If-Else: ``InlineIfElse.js``

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

## 4 不渲染: ``PreventingRendering.js``

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
