import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";
import { PeoplePickerTypesExample } from "./PeoplePicker/PeoplePicker";
import { Link, Label, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react';
import { PersonaBasicExample } from "./Persona/Persona";
import { ButtonDefaultExample } from "./office-ui-fabric-react/packages/office-ui-fabric-react/src/components/Button/examples/Button.Default.Example";
import { ShimmerApplicationExample } from "./Contact Group/ContactGroup";
import { ShimmerLoadDataExample } from "./Persona/Shimmer";

// example files
// https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src
storiesOf("office-ui-fabric-react: Components", module)
  .add("PeoplePicker", () => <PeoplePickerTypesExample delayResults={false} />)
  .add("PeoplePicker w/ delayed results", () => <PeoplePickerTypesExample delayResults={true} />)
  .add("PeoplePicker w/ delayed results + options", () => <PeoplePickerTypesExample delayResults={true} options />)
  .add("Persona", () => <ShimmerLoadDataExample />)
  .add("Persona basic", () => <PersonaBasicExample hidePersonaDetails />)
  .add("Persona w/ image", () => <PersonaBasicExample hidePersonaDetails image />)
  .add("Persona w/ image + details", () => <PersonaBasicExample image />)
  .add("Persona w/ image + details + presence", () => <PersonaBasicExample presence image />)
  .add("Button Standard", () => <ButtonDefaultExample text={"Button"} />)
  .add("Button Primary", () => <ButtonDefaultExample primary text={"Button"} />)
  .add("Contact Groups", () => <ShimmerApplicationExample />)
  .add("Contact Groups - loading", () => <ShimmerApplicationExample />)
  .add("Contact Groups - loaded", () => <ShimmerApplicationExample isDataLoaded />)
// ShimmerApplicationExample

storiesOf("office-ui-fabric-react: Screens", module)
  .add("Find Your Contact", () => findYourContact({
    preSelected: false,
    image: false,
    presence: false,
    hidePersonaDetails: true
  }))
  .add("Find Your Contact - populated", () => findYourContact({
    preSelected: true,
    image: true,
    presence: true,
    hidePersonaDetails: false
  }))

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));
type FindYourContact = {
  preSelected: boolean,
  image: boolean,
  presence: boolean,
  hidePersonaDetails: boolean,
}
const findYourContact = ({ preSelected, image, presence, hidePersonaDetails }: FindYourContact) => <div style={{ boxShadow: '0 14px 18px 0 rgba(0,0,0,0.2)', paddingBottom: 25, paddingRight: 25, paddingLeft: 25, width: 400 }}>
  <h1 style={{ marginBottom: 20, textAlign: 'center', width: 400 }}>CELA Contacts</h1>
  <PeoplePickerTypesExample delayResults={true} hideHeader preSelected={preSelected} />
  <div style={{ marginBottom: 20 }} />
  {
    !preSelected ?
      <ShimmerLoadDataExample /> :
      <PersonaBasicExample presence={presence} image={image} hideHeader hidePersonaDetails={hidePersonaDetails} />
  }
  <div style={{ marginBottom: 10 }} />
  <ButtonDefaultExample primary text={"Contact"} hideHeader />
</div>