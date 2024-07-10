    Scenario Outline: Displaying the loose emoji
        Given the player loads the following mock data:
            """
            | o | o | o |
            | o | * | o |
            | o | o | o |
            """
        When the player uncovers the cell (2,2)
        Then the emoji display should show the "loser" emoji

    Scenario Outline: Displaying the win emoji
        Given the player loads the following mock data:
            """
            | * | * | * |
            | * | o | * |
            | * | * | * |
            """
        When the player uncovers the cell (2,2)
        Then the emoji display should show the "winner" emoji

    Scenario Outline: Restarting the game after pressing the emoji
        Given the player loas the following mock data:
            """
            | o | o | o |
            | o | * | o |
            | * | * | 2 |
            """
        And the board display shows the following data:
            """
            | . | 1 | . |
            | . | ! | . |
            | . | . | 2 |
            """
        When the player presses on the emoji display
        Then the board display should show the following data:
            """
            | . | . | . |
            | . | . | . |
            | . | . | . |
            """