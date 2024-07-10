    @manual
    Scenario Outline: Displaying player's score - Begginer difficulty
        Given the player uncovers all safe cells
        And the timer shows a value between "<maxSeconds>" and "<minSeconds>"
        Then the score display should show the following value: "<score>"

        Examples:
            | maxSeconds | minSeconds | score |
            | 45         | 19         | 10    |
            | 18         | 9          | 20    |
            | 8          | 7          | 30    |
            | 6          | 4          | 40    |
            | 3          | 0          | 50    |

    @manual
    Scenario Outline: Displaying player's score - Intermetiate difficulty
        Given the player uncovers all safe cells
        And the timer shows a value between "<maxSeconds>" and "<minSeconds>"
        Then the score display should show the following value: "<score>"

        Examples:
            | maxSeconds | minSeconds | score |
            | 357        | 144        | 10    |
            | 143        | 70         | 20    |
            | 71         | 60         | 30    |
            | 59         | 48         | 40    |
            | 47         | 0          | 50    |

    @manual
    Scenario Outline: Displaying player's score - Expert difficulty
        Given the player uncovers all safe cells
        And the timer shows a value between "<maxSeconds>" and "<minSeconds>"
        Then the score display should show the following value: "<score>"

        Examples:
            | maxSeconds | minSeconds | score |
            | 1500       | 601        | 10    |
            | 600        | 301        | 20    |
            | 300        | 251        | 30    |
            | 250        | 201        | 40    |
            | 200        | 0          | 50    |