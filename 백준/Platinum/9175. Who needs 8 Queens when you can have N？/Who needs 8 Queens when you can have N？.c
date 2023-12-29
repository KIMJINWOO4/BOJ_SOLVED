#include <stdio.h>

void printQueens(int *arr, int N) {
    printf("%d\n", N);
    for (int i = 0; i < N; i++) {
        if (i < N) printf(" ");
        printf("%d", arr[i]);
    }
    printf("\n");
}

void placeQueens(int N, int *arr) {
    if (N % 6 == 2) {
        int idx = 0;
        for (int i = 2; i <= N; i += 2) arr[idx++] = i - 1;
        arr[idx++] = 2;
        arr[idx++] = 0;
        for (int i = 7; i <= N; i += 2) arr[idx++] = i - 1;
        if (N != 5) arr[idx++] = 4;
    }
    else if (N % 6 == 3) {
        int idx = 0;
        for (int i = 4; i <= N; i += 2) arr[idx++] = i - 1;
        arr[idx++] = 1;
        for (int i = 5; i <= N; i += 2) arr[idx++] = i - 1;
        arr[idx++] = 0;
        arr[idx++] = 2;
    }
    else {
        int idx = 0;
        for (int i = 2; i <= N; i += 2) arr[idx++] = i - 1;
        for (int i = 1; i <= N; i += 2) arr[idx++] = i - 1;
    }
    printQueens(arr, N);
}

int main() {
    int T;
    scanf("%d", &T);
    while (T--) {
        int n;
        scanf("%d", &n);
        int arr[n];
        placeQueens(n, arr);
    }
    return 0;
}