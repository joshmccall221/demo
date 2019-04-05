import * as React from 'react';
import { PeoplePickerTypesExample } from "../PeoplePicker/PeoplePicker";
import { PersonaBasicExample } from "../Persona/Persona";
import { ShimmerLoadDataExample } from "../Persona/Shimmer";
import { BaseComponent } from "../office-ui-fabric-react/packages/experiments/src/Utilities";
import { ButtonDefaultExample } from "../office-ui-fabric-react/packages/office-ui-fabric-react/src/components/Button/examples/Button.Default.Example";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));
export type FindYourContactProps = {
    preSelected: boolean,
    image: boolean,
    presence: boolean,
    hidePersonaDetails: boolean,
}

export class FindYourContact extends BaseComponent<FindYourContactProps & any> {

    render() {
        const { preSelected, image, presence, hidePersonaDetails } = this.props;
        return <div style={{ boxShadow: '0 14px 18px 0 rgba(0,0,0,0.2)', paddingBottom: 25, paddingRight: 25, paddingLeft: 25, width: 400 }}>
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
    }
}