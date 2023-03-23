import React, { Component } from 'react';

interface IFormState {
  fullName: string;
  birthday: string;
  country: string;
  consent: boolean;
  gender: 'male' | 'female';
  avatar: FileList | null;
}

class Form extends Component<Record<string, never>, IFormState> {
  state: IFormState = {
    fullName: '',
    birthday: '',
    country: '',
    consent: false,
    gender: 'male',
    avatar: null,
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { fullName, birthday, country, consent, gender, avatar } = this.state;

    // Perform validation on form fields here

    console.log('Submitted:', { fullName, birthday, country, consent, gender, avatar });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<IFormState, keyof IFormState>);
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<IFormState, keyof IFormState>);
  };

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked } as unknown as Pick<IFormState, keyof IFormState>);
  };

  handleSwitcherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<IFormState, keyof IFormState>);
  };

  handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    this.setState({ avatar: files });
  };

  render() {
    const { fullName, birthday, country, consent, gender, avatar } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" value={fullName} onChange={this.handleInputChange} />

        <label htmlFor="birthday">Birthday:</label>
        <input type="date" name="birthday" value={birthday} onChange={this.handleInputChange} />

        <label htmlFor="country">Country:</label>
        <select id="country" name="country" value={country} onChange={this.handleSelectChange}>
          <option value="">Choose a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>

        <label htmlFor="consent">
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={this.handleCheckboxChange}
          />
          I consent to my personal data
        </label>

        <label htmlFor="gender">Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              id="gender-male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={this.handleSwitcherChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              id="gender-female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={this.handleSwitcherChange}
            />
            Female
          </label>
        </div>

        <label htmlFor="avatar">Avatar:</label>
        <input type="file" id="avatar" name="avatar" onChange={this.handleFileUpload} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
