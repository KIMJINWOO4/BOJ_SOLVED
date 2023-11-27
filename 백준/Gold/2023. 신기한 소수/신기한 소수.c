#include <stdio.h>

int is_prime(int num)
{
	if(num < 2) 
		return 0;
    for(int i = 2; i <= num / i; i++){
        if(num % i == 0) 
			return 0;
    }
    return 1;
}

void check(int tcheck, int i)
{
	if(i == 0) 
		printf("%d\n", tcheck);
    for(int j = 1; j < 10; j += 2){   
        int tmp = (tcheck * 10) + j;
        if(is_prime(tmp)){
            check(tmp, i - 1);
        }
    }
}

int main(void)
{
	int i;

	scanf("%d", &i);
	if (i > 0 && i < 9)
	{
		i--;
		check(2, i);
		check(3, i);
		check(5, i);
		check(7, i);
	}
	return 0;
}