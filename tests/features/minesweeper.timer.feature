    Scenario: Default timer value
        Then the timer should show "000"

    @manual
    Scenario: Starting the timer count - Uncovering a cell
        Given the player loads the following mock data:
            """
            | * | * | o |
            | o | o | o |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | . | . | . |
            | . | . | . |
            | . | . | . |
            """
        And the player uncovers the cell (2, 2)
        And 1 secong passes
        Then the timer should show the following value: "001"

    @manual
    Scenario: Starting the timer count - Tagging a cell
        Given the player loads the following mock data:
            """
            | * | * | o |
            | o | o | o |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | . | . | . |
            | . | . | . |
            | . | . | . |
            """
        And the player tags the cell (2, 2)
        And 1 secong passes
        Then the timer should show the following value: "001"


    @manual
    Scenario Outline: Stoping the timer - Losing a game
        Given the player loads the following mock data:
            """
            | o | o | o |
            | o | * | o |
            | o | o | o |
            """
        And the timer shows: "030"
        When the player uncovers the cell (2,2)
        And 1 second passes
        Then the timer should show the following value: "030"

    @manual
    Scenario Outline: Stoping the timer - Winning a game
        Given the player loads the following mock data:
            """
            | * | * | * |
            | * | o | * |
            | * | * | * |
            """
        And the timer shows: "030"
        When the player uncovers the cell (2,2)
        And 1 second passes
        Then the timer should show the following value: "030"

    @manual
    Scenario Outline: Updating timer after one second
        Given the player starts a new game
        And the timer shows the following value: <oldvalue>
        And 1 second passes
        Then the timer should show the following value: <newValue>

        Examples:
            | oldvalue | newValue |
            | 000      | 001      |
            | 001      | 002      |
            | 002      | 003      |
            | 009      | 010      |
            | 099      | 100      |

    @manual
    Scenario: Updating the timer after reaching 999 seconds
        Given the timer shows the following value: "999"
        And 1 secong passes
        Then the timer should show the following value: "999"