    Scenario: Displaying the number of mines when the game starts
        Given the player loads the following mock data:
            """
            | * | * | o | o |
            | o | o | o | o |
            | o | * | o | o |
            | o | o | * | * |
            """
        And the display shows:
            """
            | . | . | . | . |
            | . | . | . | . |
            | . | . | . | . |
            | . | . | . | . |
            """
        Then the mines display should show the following data: "5"

    Scenario Outline: Tagging a cell - displaying the number of mines left to tag
        Given the player loads the following mock data:
            """
            | * | * | o | o |
            | o | o | o | o |
            | o | * | o | o |
            | o | o | * | * |
            """
        And the mines display display shows the following data: <oldValue>
        And the player right clicks on the cell <cell>
        Then the mines display display should show the following data: <newValue>
        Examples:
            | oldValue | cell   | newValue |
            | 5        | (1, 1) | 4        |
            | 4        | (2, 2) | 3        |
            | 3        | (1, 4) | 2        |
            | 0        | (4, 4) | -1       |
            | -3       | (3, 1) | -4       |

    Scenario: Displaying the minimum number of untagged mines left
        Given the player loads the following mock data:
            """
            | * | * | o |
            | o | o | o |
            | o | * | o |
            """
        And the board display shows the following data:
            """
            | ! | ! | ! |
            | ! | . | ! |
            | ! | ! | ! |
            """
        And the mines display display shows the following data: "-99"
        When the player right clicks on the cell (2, 2)
        Then the mine cound display should show "-99"

    Scenario Outline: Entering mines number in Custom game settings
        Given the player presses the Custom button
        And the player writes <rows> in the rows field
        And the player writes <columns> in the columns field
        And the player writes <mines> in the mines field
        And the player presses the update button
        Then the mines field should show the following data: <minesToTag>
        And the mines display should show the following data: <tagsLeft>

        Examples:
            | rows | columns | mines | minesToTag | tagsLeft |
            | 1    | 1       | 0     | 1          | 001      |
            | 1    | 1       | -1    | 1          | 001      |
            | 3    | 4       | 38    | 12         | 012      |
            | 5    | 5       | 1     | 1          | 001      |
            | 6    | 6       | 50    | 36         | 036      |
            # Up from 6x7 the max number of mines should be (rows-1)(rows-2)
            | 6    | 7       | 50    | 30         | 030      |
            | 10   | 10      | 100   | 81         | 081      |
            | 100  | 100     | 10000 | 9801       | 999      |