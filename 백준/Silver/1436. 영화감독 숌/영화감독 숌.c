#include <stdio.h>

int f_check(int a)
{
	int check = 0;

	while(a)
	{
		if(a%10 == 6)
			check += 1;
		else
			check = 0;
		if(check == 3)
			return 1;
		a /= 10;
	}
	return 0;
}

int main(void)
{
	int count;
	int check = 666;
	int i = 1;
	scanf("%d", &count);

	while(1)
	{
		if(f_check(check))
		{
			if (i == count)
				break;
			i++;
		}
		check++;
	}
	printf("%d",check);
	return 0;
}

