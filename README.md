# uTravel mobile

## New development environment configuration instructions

To configure a new mobile development environment:

1. Clone the code from [https://github.com/L4UZ/desarrollo-ui-mobile](https://github.com/L4UZ/desarrollo-ui-mobile)
2. In the root directory run `yarn install`
3. Create a `.env` file in the root directory, copy the contents from `.env.example` and fill the corresponding values for each key
4. Execute `yarn start` to run the app in development mode. Follow [Expo instructions](https://docs.expo.io/get-started/installation/) to view the app on your phone/emulator.

## Design justification

### Style guides and Design systems

This project was made following Material Design style guide. For this, the project uses `react-native-paper` package which provides a robust implementation of common components that follow Material Design guidelines.

### Usability and perception concepts

- **Law of proximity**

  This was used to group common components such as continent anchors

- **Law of similarity**

  This principle was used to group cohesive parts of the interface. It can be seen in the place detail, that has multiple similar expansion panels.

- **Law of familiarity**

  This law was used in the

### Design patterns

- **Visual hierarchy** was used all across the app to guide the user's attention through the interface. This can be seen in every screen in the app, ranging from bigger and bolder titles to small details like bold activities title and normal font weight price.

- **Color contrast** was also useed across the app in things like currently selected tab and button colors to highlight them.

- **Recognition rather than memorization** was used on the bottom tab navigation by providing icons that represent each tab's content.

- **System status:** The app provides the user with feedback each time is is loading in a clear way.

- **Navigation patterns:**

  - **Escape hatch:** In every screen of the app possiblt, an arrow is shown to give the user a way out of the current screen.

  - **Bottom tab navigation:** This was the selected form of navigation through the app since it provides the user the current place in the app at every moment and also is more convenient to use than other types of navigation. Hamburger menu was discarded since it hides navigation options from the user and requires more taps to navigate through the app. Top tab navigation was discarded because of a research that shows that the top of the device is less comfortable to reach than the bottom.

  - **Animated navigation** was used to scroll in each tab when tapping the tab twice

## React component hierarchy

> _Components marked with `*` are the ones shared between web and mobile_

- TabNavigator

  **(signed out)**

  - Signin\*
  - Signup\*

  **(signed in)**

  - TabNavigator

    - StackNavigator

      - Continents\*
        - Region\*
          - Place\*

    - StackNavigator

      - Trips\*
        - TripDetail\*
          - Place\*

    - StackNavigator

      - PlacesByDistance
        - Place\*

    - Profile
