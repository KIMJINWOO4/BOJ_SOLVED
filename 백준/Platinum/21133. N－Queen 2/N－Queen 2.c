#include <stdio.h>

int count = 0;

void check(int *tmp, int n)
{
	if(n % 6 != 2 && n % 6 != 3)
	{
		for(int i=1; i<=n/2; i++) 
			tmp[count++] = 2 * i - 1;
 		if(n%2 ==1)
			tmp[count++]  = n;
 		for(int i=1; i<=n/2; i++) 
			tmp[count++] = 2 * i;
	}
	else if (n % 6 == 2)
	{
		for(int i=1; i<=n/2; i++) 
			tmp[count++] = 2 * i;
 		tmp[count++] = 3;
		tmp[count++] = 1;
 		for(int i=n / 2 + 2; i < n - 1; i++) 
			tmp[count++] = 2*(i-n/2 +1)+1;
		tmp[count++] = 5;
	}
	else if(n % 6 == 3)
	{
		for(int i=2; i <= n / 2; i++) 
			tmp[count++] = 2 * i;
 		tmp[count++] = 2;
 		for(int i = n / 2; i< n - 2; i++) 
			tmp[count++] = (i- n/2 + 2)*2+1;
		tmp[count++] = 1;
		tmp[count++] = 3;
	}
	
}

int main(void)
{
	int i;

	scanf("%d", &i);
	int tmp[i];
	check(tmp, i);
	for(int k = 0; k < i; k++)
		printf("%d\n", tmp[k]);
	return 0;
}