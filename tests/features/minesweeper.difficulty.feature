    Scenario: Choosing Begginer difficulty
        Given the user presses the Begginer button
        Then the board display should show the following data:
            """
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . |
            """

    Scenario: Choosing Intermediate difficulty
        Given the users presses the Intermediate button
        Then the board display should show the following data:
            """
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            """

    Scenario: Choosing Expert difficulty
        Given the user presses the Expert button
        Then the board display should show the following data:
            """
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . | . |
            """

    Scenario Outline: Choosing Custom difficulty
        Given the player presses the Custom button
        And the player writes <rows> in the rows field
        And the player writes <columns> in the columns field
        And the player presses the update button
        Then the board display should show the following data: <displayData>

        Examples:
            | rows | columns | displayData                   |
            | 1    | 1       | .                             |
            | 1    | 1       | .                             |
            | 3    | 4       | ....-....-....                |
            | 5    | 5       | .....-.....-.....-.....-..... |
            | 50   | 50      | .....-.....-.....-.....-..... |

    Scenario Outline: Violating the size limits in Custom difficulty
        Given the player presses the Custom button
        And the player writes <inputRows> in the rows field
        And the player writes <inputColumms> in the columns field
        And the player presses the update button
        And the rows field should show the following value <finalRows>
        And the columns field should show the following value <FinalColumns>

        Examples:
            | rows | columns | rows | columns |
            | 100  | 100     | 100  | 100     |
            | 101  | 100     | 100  | 100     |
            | 101  | 99      | 100  | 99      |
            | -1   | 10      | 1    | 10      |
            | 0    | 10      | 1    | 10      |
