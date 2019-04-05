import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";
import { PeoplePickerTypesExample } from "../components/PeoplePicker/PeoplePicker";

// PeoplePickerTypesExample
storiesOf("office-ui-fabric-react", module)
  .add("PeoplePicker", () => <PeoplePickerTypesExample delayResults={false} />)
  .add("PeoplePicker w/ delayed results", () => (
    <PeoplePickerTypesExample delayResults={true} />
  ));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));
