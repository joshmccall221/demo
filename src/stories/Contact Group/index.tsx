import * as React from 'react';
import { PeoplePickerTypesExample } from "../PeoplePicker/PeoplePicker";
import { PersonaBasicExample } from "../Persona/Persona";
import { ShimmerLoadDataExample } from "../Persona/Shimmer";
import { BaseComponent } from 'office-ui-fabric-react';
// import { BaseComponent } from "../office-ui-fabric-react/packages/experiments/src/Utilities";
import { ButtonDefaultExample } from "../Button/Button";

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
        return <>
            <h1 style={{ marginBottom: 20, textAlign: 'center', width: 400 }}>CELA Contacts</h1>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: 15, padding: 15, width: 400 }}>
                <PeoplePickerTypesExample delayResults={true} hideHeader preSelected={preSelected} />
            </div>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: 5, width: 450 }}>
                <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', paddingBottom: 25, paddingRight: 25, paddingLeft: 25, width: 400 }}>
                    <div style={{ marginBottom: 10 }} />
                    {
                        !preSelected ?
                            <ShimmerLoadDataExample /> :
                            <PersonaBasicExample presence={presence} image={image} hideHeader hidePersonaDetails={hidePersonaDetails} />
                    }
                    <div style={{ marginBottom: 10 }} />
                    {/* <ButtonDefaultExample  /> */}
                    <ButtonDefaultExample primary text={"Contact"} />
                </div>
            </div>
        </>
    }
}