#include <stdio.h>

void placeQueens(int n) {
    if (n % 6 != 2 && n % 6 != 3) {
        for (int i = 2; i <= n; i += 2) {
            printf("%d\n", i);
        }
        for (int i = 1; i <= n; i += 2) {
            printf("%d\n", i);
        }
    } else {
        for (int i = 2; i <= n; i += 2) {
            if (n % 6 == 3 && i == 2) continue;
            printf("%d\n", i);
        }
        if (n % 6 == 2) {
            printf("3\n1\n");
            for (int i = 7; i <= n; i += 2) {
                printf("%d\n", i);
            }
            printf("5\n");
        } else {
            for (int i = 5; i <= n; i += 2) {
                printf("%d\n", i);
            }
            printf("1\n3\n");
        }
        if (n % 6 == 3) {
            printf("2\n");
        }
    }
}

int main() {
    int n;
    scanf("%d", &n);
    placeQueens(n);
    return 0;
}
