#include <stdio.h>

int zero;
int one;

void fibonacci(int n) 
{
	int tmp[n + 1][2];
	if (n == 0){
		zero++;
		return ;
	}
	else if(n == 1)
	{
		one++;
		return ;
	}
	tmp[0][0] = 1;
	tmp[0][1] = 0;
	tmp[1][0] = 0;
	tmp[1][1] = 1;
	for(int i = 2; i < n + 1; i++)
	{
		tmp[i][0] = tmp[i-1][0] + tmp[i-2][0];
		tmp[i][1] = tmp[i-1][1] + tmp[i-2][1];
	}
	zero = tmp[n][0];
	one = tmp[n][1];
	return ;
}

int main(void)
{
	int i;

	scanf("%d", &i);
	int tmp[i];
	for (int j = 0; j < i; j++)
		scanf("%d", &tmp[j]);
	for (int j = 0; j < i; j++)
	{
		zero = 0;
		one = 0;
		fibonacci(tmp[j]);
		printf("%d %d\n", zero, one);
	}
	return 0;
}