import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
// import { Button, Welcome } from "@storybook/react/demo";
import { PeoplePickerTypesExample } from "./PeoplePicker/PeoplePicker";
import {
  Link,
  Label,
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react';
import { PersonaBasicExample } from "./Persona/Persona";
// import { ButtonDefaultExample } from "./office-ui-fabric-react/packages/office-ui-fabric-react/src/components/Button/examples/Button.Default.Example";
import { ShimmerApplicationExample } from "./Contact Group/ContactGroup";
import { ShimmerLoadDataExample } from "./Persona/Shimmer";
import { FindYourContact } from "./Contact Group";

// example files
// https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src
storiesOf("office-ui-fabric-react: Components", module)
  .add("PeoplePicker", () => < PeoplePickerTypesExample delayResults={
    false
  }
  />)
  .add("PeoplePicker w/ delayed results", () => < PeoplePickerTypesExample delayResults={
    true
  }
  />)
  .add("PeoplePicker w/ delayed results + options", () => < PeoplePickerTypesExample delayResults={
    true
  }
    options />)
  .add("Persona", () => < ShimmerLoadDataExample />)
  .add("Persona basic", () => < PersonaBasicExample hidePersonaDetails />)
  .add("Persona w/ image", () => < PersonaBasicExample hidePersonaDetails image />)
  .add("Persona w/ image + details", () => < PersonaBasicExample image />)
  .add("Persona w/ image + details + presence", () => < PersonaBasicExample presence image />)
  // .add("Button Standard", () => < ButtonDefaultExample text={
  //   "Button"
  // }
  // />)
  // .add("Button Primary", () => < ButtonDefaultExample primary text={
  //   "Button"
  // }
  // />)
  .add("Contact Groups", () => < ShimmerApplicationExample />)
  .add("Contact Groups - loading", () => < ShimmerApplicationExample />)
  .add("Contact Groups - loaded", () => < ShimmerApplicationExample isDataLoaded />)
// // ShimmerApplicationExample

storiesOf("office-ui-fabric-react: Screens", module)
  .add("Find Your Contact", () => < FindYourContact {...{
    preSelected: false,
    image: false,
    presence: false,
    hidePersonaDetails: true
  }} />)
  .add("Find Your Contact - populated", () => < FindYourContact {...{
    preSelected: true,
    image: true,
    presence: true,
    hidePersonaDetails: false
  }} />)
