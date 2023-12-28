#include <stdio.h>

void placeQueens(int N) {
    if (N % 6 == 2) {
        for (int i = 2; i <= N; i += 2)
            printf("%d\n", i);
        printf("3\n1\n");
        for (int i = 7; i <= N; i += 2)
            printf("%d\n", i);
        if (N != 5) printf("5\n");
    }
    else if (N % 6 == 3) {
        for (int i = 4; i <= N; i += 2)
            printf("%d\n", i);
        printf("2\n");
        for (int i = 5; i <= N; i += 2)
            printf("%d\n", i);
        printf("1\n3\n");
    }
    else {
        for (int i = 2; i <= N; i += 2)
            printf("%d\n", i);
        for (int i = 1; i <= N; i += 2)
            printf("%d\n", i);
    }
}

int main() {
    int n;
    scanf("%d", &n);
    placeQueens(n);
    return 0;
}