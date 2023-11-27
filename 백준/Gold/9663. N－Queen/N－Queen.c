#include <stdio.h>

int count, flag;
int check(int *tmp, int val, int i)
{
	int cx, cy, j = 0;
	while (j < i)
	{
		cx = j - tmp[j];
		cy = j + tmp[j]; 
		if (tmp[j] == val || cx == (i - val) || cy == (i + val))
			return 0;
		j++;
	}
	*(tmp + i) = val;
	return 1;
}

void start(int *tmp, int i, int max)
{
	int val = 0;

	if (i == max)
	{
		count++;
		return ;
	}
	else
	{
		while(val < max)
		{
			if(check(tmp, val, i) && val < max)
				start(tmp, i + 1, max);
			val++;
		}
	}
}

int main(void)
{
	int i;
	int tmp[15];

	scanf("%d", &i);
	if (i > 0 && i < 16)
	{
		count = 0;
		start(tmp, 0, i);
		printf("%d", count);
	}
	return 0;
}